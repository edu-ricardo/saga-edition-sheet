import './styles/style.scss';
import { subscribeToAuthChanges, type User } from './auth/firebase';
import { Header } from './components/Header';

const app = document.querySelector<HTMLDivElement>('#app')!;

function render(user: User | null) {
  app.innerHTML = '';

  // Header
  app.appendChild(Header(user));

  // Main Content
  const main = document.createElement('main');

  if (user) {
    main.innerHTML = `
      <div class="wizard-container">
        <h2>Welcome, ${user.displayName}</h2>
        <div class="actions" style="justify-content: center; margin-bottom: 2rem;">
            <button id="create-char-btn" class="primary">Create New Character</button>
            <button id="view-chars-btn">My Characters</button>
            <button id="gm-view-btn" style="background-color: #333; color: #fff;">GM Section</button>
        </div>
        <div id="content-area"></div>
      </div>
    `;

    // Event Listeners
    main.querySelector('#create-char-btn')?.addEventListener('click', async () => {
      const contentArea = main.querySelector('#content-area');
      if (contentArea) {
        contentArea.innerHTML = ''; // Clear prev content
        contentArea.className = ''; // Clear classes (e.g. wizard-flex-layout)
        const { Wizard } = await import('./components/Wizard');
        const wizard = new Wizard(contentArea as HTMLElement);
        wizard.render();
      }
    });

    main.querySelector('#view-chars-btn')?.addEventListener('click', async () => {
      const contentArea = main.querySelector('#content-area');
      if (contentArea) {
        contentArea.innerHTML = '';
        contentArea.className = ''; // Clear classes
        contentArea.className = ''; // Clear classes
        const { CharacterList } = await import('./components/CharacterList');
        const list = new CharacterList(contentArea as HTMLElement, user, false,
          async (char) => {
            // Edit Callback
            contentArea.innerHTML = '';
            contentArea.className = ''; // Clear classes
            const { Wizard } = await import('./components/Wizard');
            const wizard = new Wizard(contentArea as HTMLElement, char);
            wizard.render();
          },
          async (char) => {
            // Play Callback
            contentArea.innerHTML = '';
            contentArea.className = '';
            const { ActiveSheet } = await import('./components/ActiveSheet');
            const activeSheet = new ActiveSheet(contentArea as HTMLElement, char, user, () => {
              // On Back -> Re-render list
              // We can re-trigger the view-chars-btn click or just re-render list
              // Re-rendering list is cleaner but we need the instance? 
              // Actually the list instance is gone. We need to re-create it.
              // Simplest is to just re-click the button or re-run the logic.
              (main.querySelector('#view-chars-btn') as HTMLElement).click();
            });
            activeSheet.render();
          }
        );
        list.render();
      }
    });

    main.querySelector('#gm-view-btn')?.addEventListener('click', async () => {
      const contentArea = main.querySelector('#content-area');
      if (contentArea) {
        contentArea.innerHTML = '';
        contentArea.className = ''; // Clear classes
        const { CharacterList } = await import('./components/CharacterList');
        // Pass true for isGM to view all
        const list = new CharacterList(contentArea as HTMLElement, user, true);
        list.render();
      }
    });

  } else {
    main.innerHTML = `
      <div style="text-align: center; margin-top: 3rem;">
        <h2>Welcome to Saga Edition Forge</h2>
        <p>Please sign in with Google to create and manage your Star Wars RPG characters.</p>
        <p style="margin-top: 1rem; font-size: 0.9em; color: #666;">Note: You will need to configure Firebase credentials in source code to run fully.</p>
      </div>
    `;
  }

  app.appendChild(main);
}

// Subscribe to auth state
subscribeToAuthChanges((user) => {
  render(user);
});
