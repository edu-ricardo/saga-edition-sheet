export interface RollResult {
    total: number;
    dieRoll: number;
    modifier: number;
    isCritical: boolean;
    isFail: boolean;
}

export class DiceRoller {
    static roll(dieSize: number = 20, modifier: number = 0): RollResult {
        const roll = Math.floor(Math.random() * dieSize) + 1;

        return {
            total: roll + modifier,
            dieRoll: roll,
            modifier: modifier,
            isCritical: roll === 20,
            isFail: roll === 1
        };
    }

    static rollDamage(diceCount: number, dieSize: number, modifier: number): { total: number; rolls: number[] } {
        const rolls: number[] = [];
        let total = 0;

        for (let i = 0; i < diceCount; i++) {
            const r = Math.floor(Math.random() * dieSize) + 1;
            rolls.push(r);
            total += r;
        }

        return {
            total: total + modifier,
            rolls
        };
    }

    static rollString(expression: string): { total: number; rolls: number[]; breakdown: string } | null {
        // Handle "2d8", "3d6+2", "1d10-1"
        const match = expression.match(/(\d+)d(\d+)(?:\s*([+-])\s*(\d+))?/);
        if (!match) return null;

        const count = parseInt(match[1]);
        const size = parseInt(match[2]);
        let mod = 0;
        if (match[3] && match[4]) {
            mod = parseInt(match[4]);
            if (match[3] === '-') mod = -mod;
        }

        const result = this.rollDamage(count, size, mod);
        return {
            ...result,
            breakdown: `(${count}d${size}${mod !== 0 ? (mod > 0 ? `+${mod}` : mod) : ''})`
        };
    }
}
