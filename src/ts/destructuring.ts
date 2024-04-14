interface SpecialAttack {
    id: number;
    name: string;
    icon: string;
    description?: string;
}

export function extractAttacks({ special }: { special: SpecialAttack[] }): SpecialAttack[] {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        icon,
        description
    }));
}