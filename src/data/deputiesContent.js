import Deputy1 from '../assets/img/Deputy1.webp';
import Deputy3 from '../assets/img/Deputy3.webp';
import Director from '../assets/img/Director.webp';

export const getDeputiesContent = (t, lang) => {
    const getLangNames = (ru, uz, en) => {
        if (lang === 'uz') return uz;
        if (lang === 'en') return en;
        return ru;
    };

    const photos = {
        "1": Deputy1,
        "2": "", // Нет фото
        "3": Deputy3,
        "4": ""  // Нет фото
    };

    return {
        "1": {
            name: t('management.names.egamov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.spiritual'),
            photo: photos["1"],
            birthDate: "—",
            languages: getLangNames("Русский, английский", "Rus, ingliz tillari", "Russian, English"),
            awards: null,
            education: [
                {
                    year: "2005",
                    degree: t('deputy_page.edu_types.bachelor'),
                    school: t('deputy_page.schools.niad'),
                    spec: t('deputy_page.specs.design')
                },
                {
                    year: "2012",
                    degree: t('deputy_page.edu_types.master'),
                    school: t('deputy_page.schools.niad'),
                    spec: t('deputy_page.specs.interior')
                }
            ],
            career: [
                { period: "2000-2005", position: t('deputy_page.jobs.landscaping') },
                { period: "2006-2013", position: t('deputy_page.jobs.senior_teacher') },
                { period: "2013-2016", position: t('deputy_page.jobs.deputy_spiritual') },
                { period: "2016-2017", position: t('deputy_page.jobs.deputy_prod') },
                { period: "2017-2018", position: t('deputy_page.jobs.deputy_spiritual') },
                { period: "2018-2023", position: t('deputy_page.jobs.director_school') },
                { period: `2023 - ${t('deputy_page.present')}`, position: t('deputy_page.jobs.deputy_spiritual') }
            ]
        },
        "2": {
            name: t('management.names.radjabov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.academic'),
            photo: photos["2"],
            birthDate: "—",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awards: t('deputy_page.awards_list.radjabov'),
            education: [
                {
                    year: "2005",
                    degree: t('deputy_page.edu_types.bachelor'),
                    school: t('deputy_page.schools.tspu'),
                    spec: t('deputy_page.specs.physics_astro')
                },
                {
                    year: "2007",
                    degree: t('deputy_page.edu_types.master'),
                    school: t('deputy_page.schools.tspu'),
                    spec: t('deputy_page.specs.physics')
                }
            ],
            career: [
                { period: "2001-2007", position: t('deputy_page.jobs.student_tspu') },
                { period: "2008-2011", position: t('deputy_page.jobs.aspirant_tspu') },
                { period: "2005-2010", position: t('deputy_page.jobs.teacher_design_school') },
                { period: "2010-2012", position: t('deputy_page.jobs.teacher_benkov') },
                { period: `2012 - ${t('deputy_page.present')}`, position: t('deputy_page.jobs.deputy_academic') }
            ]
        },
        "3": {
            name: t('management.names.shakarimov'),
            role: t('management.deputy_role'),
            dept: t('management.depts.fields'),
            photo: photos["3"],
            birthDate: "—",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awards: null,
            education: [
                {
                    year: "2014",
                    degree: t('deputy_page.edu_types.bachelor'),
                    school: t('deputy_page.schools.niad'),
                    spec: t('deputy_page.specs.graphics_photo')
                },
                {
                    year: "2016",
                    degree: t('deputy_page.edu_types.master'),
                    school: t('deputy_page.schools.niad'),
                    spec: t('deputy_page.specs.art_interior')
                }
            ],
            career: [
                { period: "2014-2015", position: t('deputy_page.jobs.teacher_rotational') },
                { period: "2016-2017", position: t('deputy_page.jobs.master_prod') },
                { period: "2016-2023", position: t('deputy_page.jobs.teacher_head_dept') },
                { period: `2023 - ${t('deputy_page.present')}`, position: t('deputy_page.jobs.deputy_prof') }
            ]
        },
        "4": {
            name: t('management.names.tagaev'),
            role: t('management.deputy_role'),
            dept: t('management.depts.economic'),
            photo: photos["4"],
            birthDate: "—",
            languages: getLangNames("Узбекский, русский", "O'zbek, rus tillari", "Uzbek, Russian"),
            awards: null,
            education: [
                {
                    year: "2007",
                    degree: t('deputy_page.edu_types.higher'),
                    school: t('deputy_page.schools.tspu'),
                    spec: t('deputy_page.specs.fine_art_graphics')
                }
            ],
            career: [
                { period: "2001-2004", position: t('deputy_page.jobs.teacher_school_15') },
                { period: "2004-2012", position: t('deputy_page.jobs.teacher_benkov') },
                { period: `2012 - ${t('deputy_page.present')}`, position: t('deputy_page.jobs.deputy_econ') }
            ]
        }
    };
};

export const getDirectorContent = (t) => {
    return {
        name: t('director.director_name'),
        role: t('director.director_label'),
        photo: Director,
        birthDate: "27.11.1974",
        nationality: t('director.director_nationality'),
        languages: t('director.director_languages'),
        additionalRole: t('director.director_extra'),
        education: [
            {
                year: "2004",
                degree: t('director.edu.bachelor'),
                school: t('director.edu.tspu'),
                spec: t('director.edu.spec_applied')
            },
            {
                year: "2011",
                degree: t('director.edu.master'),
                school: t('director.edu.tspu'),
                spec: t('director.edu.spec_fine_art')
            }
        ],
        career: [
            { period: "1991-1992", position: t('director.career_dir.guard') },
            { period: "1992-1992", position: t('director.career_dir.maksorat') },
            { period: "1992-1997", position: t('director.career_dir.student') },
            { period: "1997-1999", position: t('director.career_dir.master_edu') },
            { period: "1999-2005", position: t('director.career_dir.methodist') },
            { period: "2005-2013", position: t('directoe.career_dir.deputy') },
            { period: `2013 — ${t('deputy_page.present')}`, position: t('director.career_dir.director') }
        ]
    };
};