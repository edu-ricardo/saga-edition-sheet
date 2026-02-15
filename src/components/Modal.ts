export class Modal {
    public static confirm(message: string, onConfirm: () => void, onCancel?: () => void) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay fade-in';
        Object.assign(overlay.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        });

        const modal = document.createElement('div');
        modal.className = 'modal-card';
        Object.assign(modal.style, {
            backgroundColor: 'var(--surface, #fff)',
            padding: '2rem', borderRadius: '12px',
            maxWidth: '400px', width: '90%',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            textAlign: 'center'
        });

        modal.innerHTML = `
            <p style="margin-bottom: 1.5rem; font-size: 1.1em;">${message}</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button id="modal-cancel">Cancel</button>
                <button id="modal-confirm" class="primary" style="background-color: #ff4444; border-color: #ff4444; color: white;">Confirm</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Theme support injection (if variable exists)
        if (document.body.classList.contains('dark-mode')) {
            modal.style.backgroundColor = '#161B22';
            modal.style.color = '#C9D1D9';
            modal.style.border = '1px solid #30363D';
        }

        const close = () => {
            overlay.remove();
        };

        modal.querySelector('#modal-confirm')?.addEventListener('click', () => {
            onConfirm();
            close();
        });

        modal.querySelector('#modal-cancel')?.addEventListener('click', () => {
            if (onCancel) onCancel();
            close();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                if (onCancel) onCancel();
                close();
            }
        });
    }

    public static prompt(message: string, onConfirm: (value: string) => void, onCancel?: () => void, defaultValue: string = '') {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay fade-in';
        Object.assign(overlay.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        });

        const modal = document.createElement('div');
        modal.className = 'modal-card';
        Object.assign(modal.style, {
            backgroundColor: 'var(--surface, #fff)',
            padding: '2rem', borderRadius: '12px',
            maxWidth: '400px', width: '90%',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            textAlign: 'center'
        });

        modal.innerHTML = `
            <p style="margin-bottom: 1rem; font-size: 1.1em;">${message}</p>
            <input type="text" id="modal-input" value="${defaultValue}" style="width: 100%; padding: 0.5rem; margin-bottom: 1.5rem; border: 1px solid #ccc; borderRadius: 4px; font-size: 1rem;">
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button id="modal-cancel">Cancel</button>
                <button id="modal-confirm" class="primary" style="background-color: var(--primary, #0052CC); color: white;">Confirm</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        const input = modal.querySelector('#modal-input') as HTMLInputElement;

        // Theme support injection (if variable exists)
        if (document.body.classList.contains('dark-mode')) {
            modal.style.backgroundColor = '#161B22';
            modal.style.color = '#C9D1D9';
            modal.style.border = '1px solid #30363D';
            if (input) {
                input.style.backgroundColor = '#0d1117';
                input.style.color = '#c9d1d9';
                input.style.border = '1px solid #30363D';
            }
        }

        input.focus();
        input.select();

        const close = () => {
            overlay.remove();
        };

        const handleConfirm = () => {
            const value = input.value;
            if (value !== null) {
                onConfirm(value);
            }
            close();
        };

        modal.querySelector('#modal-confirm')?.addEventListener('click', handleConfirm);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleConfirm();
            if (e.key === 'Escape') {
                if (onCancel) onCancel();
                close();
            }
        });

        modal.querySelector('#modal-cancel')?.addEventListener('click', () => {
            if (onCancel) onCancel();
            close();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                if (onCancel) onCancel();
                close();
            }
        });
    }

    public static show(title: string, content: HTMLElement | string, onClose?: () => void) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay fade-in';
        Object.assign(overlay.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        });

        const modal = document.createElement('div');
        modal.className = 'modal-card';
        Object.assign(modal.style, {
            backgroundColor: 'var(--surface, #fff)',
            padding: '2rem', borderRadius: '12px',
            maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            textAlign: 'left',
            position: 'relative'
        });

        modal.innerHTML = `
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; border-bottom: 1px solid #eee; padding-bottom: 10px;">${title}</h3>
            <button id="modal-close-x" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;">&times;</button>
            <div id="modal-content"></div>
        `;

        const contentContainer = modal.querySelector('#modal-content')!;
        if (typeof content === 'string') {
            contentContainer.innerHTML = content;
        } else {
            contentContainer.appendChild(content);
        }

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Theme support
        if (document.body.classList.contains('dark-mode')) {
            modal.style.backgroundColor = '#161B22';
            modal.style.color = '#C9D1D9';
            modal.style.border = '1px solid #30363D';

            const h3 = modal.querySelector('h3');
            if (h3) h3.style.borderBottomColor = '#30363D';
        }

        const close = () => {
            overlay.remove();
            if (onClose) onClose();
        };

        modal.querySelector('#modal-close-x')?.addEventListener('click', close);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                close();
            }
        });

        return close;
    }
}
