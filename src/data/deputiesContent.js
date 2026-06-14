import Deputy1 from '../assets/deputy/Deputy1.webp';
import Deputy3 from '../assets/deputy/Deputy3.webp';
import Deputy2 from '../assets/deputy/Deputy2.webp';
import Deputy4 from '../assets/deputy/Deputy4.webp';
import Director from '../assets/deputy/Director.webp';

export const getDeputiesContent = (t, lang) => {
    const getLangNames = (ru, uz, en) => {
        if (lang === 'uz') return uz;
        if (lang === 'en') return en;
        return ru;
    };

    const photos = {
        "1": Deputy1,
        "2": Deputy2,
        "3": Deputy3,
        "4": Deputy4
    };

    const getDeputyAwards = (id) => {
        const awards = [];
        let counter = 1;

        // Путь изменен под ваш JSON: deputy_page.id.award_counter
        while (t(`deputy_page.${id}.award_${counter}`) !== `deputy_page.${id}.award_${counter}`) {
            const awardText = t(`deputy_page.${id}.award_${counter}`);
            if (awardText) {
                awards.push(awardText);
            }
            counter++;
        }
        return awards.length > 0 ? awards : null;
    };

    return {
        "1": {
            name: t('management.names.egamov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.spiritual'),
            photo: photos["1"],
            birthDate: "20.11.1981",
            languages: getLangNames("Узбекский, Русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: t(`deputy_page.${1}.awards_title`),
            awards: getDeputyAwards("1"),
        },
        "2": {
            name: t('management.names.radjabov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.academic'),
            photo: photos["2"],
            birthDate: "13.11.1983",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: t(`deputy_page.${2}.awards_title`),
            awards: getDeputyAwards("2"),
        },
        "3": {
            name: t('management.names.shakarimov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.fields'),
            photo: photos["3"],
            birthDate: "21.06.1991",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: t(`deputy_page.${3}.awards_title`),
            awards: getDeputyAwards("3"),
        },
        "4": {
            name: t('management.names.tagaev'),
            role: t('management.deputy_role'),
            dept: t('management.depts.economic'),
            photo: photos["4"],
            birthDate: "02.08.1981",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: t(`deputy_page.${4}.awards_title`),
            awards: getDeputyAwards("4"),
        }
    };
};

export const getDirectorContent = (t) => {
    const awards = [];
    let counter = 1;

    // Цикл динамически проверяет ключи award_1, award_2... пока они существуют
    while (t(`director.award_${counter}`) !== `director.award_${counter}`) {
        const awardText = t(`director.award_${counter}`);
        if (awardText) {
            awards.push(awardText);
        }
        counter++;
    }
    return {
        name: t('director.director_name'),
        role: t('director.director_label'),
        photo: Director,
        birthDate: "27.11.1974",
        nationality: t('director.director_nationality'),
        languages: t('director.director_languages'),
        additionalRole: t('director.director_extra'),
        awardsTitle: t('director.awards_title'),
        awards: awards.length > 0 ? awards : null,
    };
};