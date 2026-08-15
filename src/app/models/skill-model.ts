export interface Skill {
    name: string,
    iconName?: string,
    monogram?: string,
}

export interface SkillCategory {
    name: string,
    label: string,
    skills: Skill[],
}