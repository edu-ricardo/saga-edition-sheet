import type { User } from 'firebase/auth';
import { signIn, signOut } from '../auth/firebase';

export function Header(user: User | null): HTMLElement {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = 'Saga Edition Forge';
    header.appendChild(title);

    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.gap = '1rem';
    controls.style.alignItems = 'center';

    // Dark Mode Toggle
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌙 / ☀️';
    themeToggle.onclick = () => {
        document.body.classList.toggle('dark-mode');
        // Basic implementation: System preference is default, class overrides
        // In a real app, save preference to localStorage
    };
    controls.appendChild(themeToggle);

    // Auth Button
    const authBtn = document.createElement('button');
    if (user) {
        authBtn.textContent = `Sign Out (${user.displayName || user.email})`;
        authBtn.onclick = () => signOut();
    } else {
        authBtn.textContent = 'Sign In with Google';
        authBtn.onclick = () => signIn();
    }
    controls.appendChild(authBtn);

    header.appendChild(controls);
    return header;
}
