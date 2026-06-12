// src/data/academicsContent.js
export const getAcademicsContent = (t) => {
    const getAcademicAwards = (id) => {
        const awards = [];
        let counter = 1;

        while (t(`academic_page.${id}.award_${counter}`) !== `academic_page.${id}.award_${counter}`) {
            const awardText = t(`academic_page.${id}.award_${counter}`);
            if (awardText) {
                awards.push(awardText);
            }
            counter++;
        }
        return awards.length > 0 ? awards : null;
    };

    return [
        {
            id: "1",
            name: t('academic_page.names.akramov'),
            role: t('academic_page.1.role'), // Статус берется индивидуально из i18n
            awardsTitle: t(`academic_page.1.awards_title`),
            awards: getAcademicAwards("1"),
        },
        {
            id: "2",
            name: t('academic_page.names.aminov'),
            role: t('academic_page.2.role'), // Индивидуальный статус
            awardsTitle: t(`academic_page.2.awards_title`),
            awards: getAcademicAwards("2"),
        },
        {
            id: "3",
            name: t('academic_page.names.aripova'),
            role: t('academic_page.3.role'), // Индивидуальный статус
            awardsTitle: t(`academic_page.3.awards_title`),
            awards: getAcademicAwards("3"),
        }
    ];
};