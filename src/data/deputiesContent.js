import Deputy1 from '../assets/deputy/Deputy1.webp';
import Deputy3 from '../assets/deputy/Deputy3.webp';
import Deputy2 from '../assets/deputy/Deputy2.webp';
import Deputy4 from '../assets/deputy/Deputy4.webp';
import Director from '../assets/deputy/Director.webp';

export const getDeputiesContent = (t, lang, i18n) => {
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

    // БЕЗОПАСНЫЙ СБОР НАГРАД ЧЕРЕЗ EXISTS
    const getDeputyAwards = (id) => {
        const awards = [];
        let counter = 1;

        // Пока ключ существует в JSON-файле, собираем награды
        while (i18n && i18n.exists(`deputy_page.${id}.award_${counter}`)) {
            const awardText = t(`deputy_page.${id}.award_${counter}`);
            if (awardText) {
                awards.push(awardText);
            }
            counter++;
        }
        return awards.length > 0 ? awards : null;
    };

    // Сначала собираем награды для каждого ID, чтобы переменные были доступны ниже
    const awards1 = getDeputyAwards("1");
    const awards2 = getDeputyAwards("2");
    const awards3 = getDeputyAwards("3");
    const awards4 = getDeputyAwards("4");

    return {
        "1": {
            name: t('management.names.egamov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.spiritual'),
            photo: photos["1"],
            birthDate: "20.11.1981",
            languages: getLangNames("Узбекский, Русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: awards1 ? t(`deputy_page.1.awards_title`) : null,
            awards: awards1,
        },
        "2": {
            name: t('management.names.radjabov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.academic'),
            photo: photos["2"],
            birthDate: "13.11.1983",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: awards2 ? t(`deputy_page.2.awards_title`) : null,
            awards: awards2,
        },
        "3": {
            name: t('management.names.shakarimov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.fields'),
            photo: photos["3"],
            birthDate: "21.06.1991",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: awards3 ? t(`deputy_page.3.awards_title`) : null,
            awards: awards3,
        },
        "4": {
            name: t('management.names.tagaev'),
            role: t('management.deputy_role'),
            dept: t('management.depts.economic'),
            photo: photos["4"],
            birthDate: "02.08.1981",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awardsTitle: awards4 ? t(`deputy_page.4.awards_title`) : null,
            awards: awards4,
        }
    };
};

export const getDirectorContent = (t, i18n) => {
    const awards = [];
    let counter = 1;

    while (i18n && i18n.exists(`director.award_${counter}`)) {
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