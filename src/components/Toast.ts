export class Toast {
    private static container: HTMLElement | null = null;

    private static createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.style.position = 'fixed';
            this.container.style.bottom = '20px';
            this.container.style.right = '20px';
            this.container.style.zIndex = '10000';
            this.container.style.display = 'flex';
            this.container.style.flexDirection = 'column';
            this.container.style.gap = '10px';
            document.body.appendChild(this.container);
        }
    }

    public static show(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000) {
        this.createContainer();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type} fade-in`;
        toast.textContent = message;

        // Inline basic styles for functionality, classes for theming
        Object.assign(toast.style, {
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            minWidth: '250px',
            maxWidth: '350px',
            cursor: 'pointer'
        });

        if (type === 'success') toast.style.backgroundColor = '#00C851'; // Green
        if (type === 'error') toast.style.backgroundColor = '#ff4444';   // Red
        if (type === 'info') toast.style.backgroundColor = '#33b5e5';    // Blue

        this.container!.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);

        // Click to dismiss
        toast.addEventListener('click', () => toast.remove());
    }
}
