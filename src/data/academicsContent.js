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
            name: t('academic_page.names.aminov_xasan'),
            role: t('academic_page.1.role'),
            awardsTitle: t('academic_page.1.awards_title'),
            awards: getAcademicAwards("1"),
        },
        {
            id: "2",
            name: t('academic_page.names.avezova_alimova'),
            role: t('academic_page.2.role'),
            awardsTitle: t('academic_page.2.awards_title'),
            awards: getAcademicAwards("2"),
        },
        {
            id: "3",
            name: t('academic_page.names.zokirjonov'),
            role: t('academic_page.3.role'),
            awardsTitle: t('academic_page.3.awards_title'),
            awards: getAcademicAwards("3"),
        },
        {
            id: "4",
            name: t('academic_page.names.ignateva'),
            role: t('academic_page.4.role'),
            awardsTitle: t('academic_page.4.awards_title'),
            awards: getAcademicAwards("4"),
        },
        {
            id: "5",
            name: t('academic_page.names.ibragimov'),
            role: t('academic_page.5.role'),
            awardsTitle: t('academic_page.5.awards_title'),
            awards: getAcademicAwards("5"),
        },
        {
            id: "6",
            name: t('academic_page.names.isakdjanov'),
            role: t('academic_page.6.role'),
            awardsTitle: t('academic_page.6.awards_title'),
            awards: getAcademicAwards("6"),
        },
        {
            id: "7",
            name: t('academic_page.names.islamshikov'),
            role: t('academic_page.7.role'),
            awardsTitle: t('academic_page.7.awards_title'),
            awards: getAcademicAwards("7"),
        },
        {
            id: "8",
            name: t('academic_page.names.karabayev'),
            role: t('academic_page.8.role'),
            awardsTitle: t('academic_page.8.awards_title'),
            awards: getAcademicAwards("8"),
        },
        {
            id: "9",
            name: t('academic_page.names.lebedev'),
            role: t('academic_page.9.role'),
            awardsTitle: t('academic_page.9.awards_title'),
            awards: getAcademicAwards("9"),
        },
        {
            id: "10",
            name: t('academic_page.names.mamadjanov'),
            role: t('academic_page.10.role'),
            awardsTitle: t('academic_page.10.awards_title'),
            awards: getAcademicAwards("10"),
        },
        {
            id: "11",
            name: t('academic_page.names.saidberdiyev'),
            role: t('academic_page.11.role'),
            awardsTitle: t('academic_page.11.awards_title'),
            awards: getAcademicAwards("11"),
        },
        {
            id: "12",
            name: t('academic_page.names.usmanov'),
            role: t('academic_page.12.role'),
            awardsTitle: t('academic_page.12.awards_title'),
            awards: getAcademicAwards("12"),
        },
        {
            id: "13",
            name: t('academic_page.names.akramov'),
            role: t('academic_page.13.role'),
            awardsTitle: t('academic_page.13.awards_title'),
            awards: getAcademicAwards("13"),
        },
        {
            id: "14",
            name: t('academic_page.names.aminov_xusan'),
            role: t('academic_page.14.role'),
            awardsTitle: t('academic_page.14.awards_title'),
            awards: getAcademicAwards("14"),
        },
        {
            id: "15",
            name: t('academic_page.names.aripova'),
            role: t('academic_page.15.role'),
            awardsTitle: t('academic_page.15.awards_title'),
            awards: getAcademicAwards("15"),
        },
        {
            id: "16",
            name: t('academic_page.names.chibisov'),
            role: t('academic_page.16.role'),
            awardsTitle: t('academic_page.16.awards_title'),
            awards: getAcademicAwards("16"),
        },
        {
            id: "17",
            name: t('academic_page.names.kuziyeva'),
            role: t('academic_page.17.role'),
            awardsTitle: t('academic_page.17.awards_title'),
            awards: getAcademicAwards("17"),
        },
    ];
};