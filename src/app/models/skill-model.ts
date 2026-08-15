export interface Skill {
    name: string,
    iconName?: string,
    monogram?: string,
}

export interface SkillCategory {
    number: string,
    label: string,
    skills: Skill[],
}