// src/data/academicsContent.js
export const getAcademicsContent = (t, i18n) => {
    const getAcademicAwards = (id) => {
        const awards = [];
        let counter = 1;

        // Безопасно проверяем существование ключа ДО его вызова
        while (i18n && i18n.exists(`academic_page.${id}.award_${counter}`)) {
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
            name: t('academic_page.names.aminov_xasan'),
            awardsTitle: t('academic_page.1.awards_title'),
            awards: getAcademicAwards("1"),
        },
        {
            id: "2",
            name: t('academic_page.names.avezova_alimova'),
            awardsTitle: t('academic_page.2.awards_title'),
            awards: getAcademicAwards("2"),
        },
        {
            id: "3",
            name: t('academic_page.names.zokirjonov'),
            awardsTitle: t('academic_page.3.awards_title'),
            awards: getAcademicAwards("3"),
        },
        {
            id: "4",
            name: t('academic_page.names.ignateva'),
            awardsTitle: t('academic_page.4.awards_title'),
            awards: getAcademicAwards("4"),
        },
        {
            id: "5",
            name: t('academic_page.names.ibragimov'),
            awardsTitle: t('academic_page.5.awards_title'),
            awards: getAcademicAwards("5"),
        },
        {
            id: "6",
            name: t('academic_page.names.isakdjanov'),
            awardsTitle: t('academic_page.6.awards_title'),
            awards: getAcademicAwards("6"),
        },
        {
            id: "7",
            name: t('academic_page.names.islamshikov'),
            awardsTitle: t('academic_page.7.awards_title'),
            awards: getAcademicAwards("7"),
        },
        {
            id: "8",
            name: t('academic_page.names.karabayev'),
            awardsTitle: t('academic_page.8.awards_title'),
            awards: getAcademicAwards("8"),
        },
        {
            id: "9",
            name: t('academic_page.names.lebedev'),
            awardsTitle: t('academic_page.9.awards_title'),
            awards: getAcademicAwards("9"),
        },
        {
            id: "10",
            name: t('academic_page.names.mamadjanov'),
            awardsTitle: t('academic_page.10.awards_title'),
            awards: getAcademicAwards("10"),
        },
        {
            id: "11",
            name: t('academic_page.names.saidberdiyev'),
            awardsTitle: t('academic_page.11.awards_title'),
            awards: getAcademicAwards("11"),
        },
        {
            id: "12",
            name: t('academic_page.names.usmanov'),
            awardsTitle: t('academic_page.12.awards_title'),
            awards: getAcademicAwards("12"),
        },
        {
            id: "13",
            name: t('academic_page.names.akramov'),
            awardsTitle: t('academic_page.13.awards_title'),
            awards: getAcademicAwards("13"),
        },
        {
            id: "14",
            name: t('academic_page.names.aminov_xusan'),
            awardsTitle: t('academic_page.14.awards_title'),
            awards: getAcademicAwards("14"),
        },
        {
            id: "15",
            name: t('academic_page.names.aripova'),
            awardsTitle: t('academic_page.15.awards_title'),
            awards: getAcademicAwards("15"),
        },
        {
            id: "16",
            name: t('academic_page.names.chibisov'),
            awardsTitle: t('academic_page.16.awards_title'),
            awards: getAcademicAwards("16"),
        },
        {
            id: "17",
            name: t('academic_page.names.kuziyeva'),
            awardsTitle: t('academic_page.17.awards_title'),
            awards: getAcademicAwards("17"),
        },
    ];
};