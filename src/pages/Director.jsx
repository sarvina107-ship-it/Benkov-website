import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDirectorContent } from '../data/deputiesContent';

const Director = () => {
    const { t, i18n } = useTranslation();
    const data = useMemo(() => getDirectorContent(t), [t, i18n.language]);

    return (
        <main className="bg-[#F8F6F2] min-h-screen py-16 px-6 text-[#1B2A44]">
            <div className="max-w-5xl mx-auto">
                <Link to="/management" className="inline-flex items-center gap-2 text-[#D4A259] font-bold uppercase tracking-widest text-sm mb-12 hover:gap-4 transition-all">
                    <span>←</span> {t('director.back')}
                </Link>

                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden mb-16 border border-gray-100">
                    <div className="md:flex">
                        <div className="md:w-2/5 aspect-square bg-gray-100">
                            <img src={data.photo} alt={data.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-[#D4A259] font-bold uppercase tracking-[0.3em] text-sm mb-4">{data.role}</span>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {data.name.split(' ')[0]} <br /> {data.name.split(' ').slice(1).join(' ')}
                            </h1>
                            <div className="space-y-4 text-[#1B2A44]/80 text-lg">
                                <p><strong className="text-[#1B2A44]">{t('director.birth')}:</strong> {data.birthDate}</p>
                                <p><strong className="text-[#1B2A44]">{t('director.nat_label')}:</strong> {data.nationality}</p>
                                <p><strong className="text-[#1B2A44]">{t('director.lang_label')}:</strong> {data.languages}</p>
                                <p className="text-base italic pt-4 text-[#D4A259] leading-relaxed border-t mt-4">{data.additionalRole}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#D4A259]"></span>{t('director.edu_title')}
                        </h2>
                        <div className="space-y-10">
                            {data.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-gray-200">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-sm font-bold text-[#D4A259] mb-2 uppercase">{edu.year} — {edu.degree}</p>
                                    <p className="text-base font-semibold leading-snug">{edu.school}</p>
                                    <p className="text-sm text-gray-500">{edu.spec}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#D4A259]"></span>{t('director.work_title')}
                        </h2>
                        <div className="bg-white rounded-[32px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border">
                            <div className="space-y-8">
                                {data.career.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-10 group">
                                        <div className="min-w-[110px] text-sm font-bold text-[#D4A259] pt-1">{item.period}</div>
                                        <div className="pb-8 border-b border-gray-50 w-full group-last:border-0 group-last:pb-0">
                                            <p className="text-base leading-relaxed font-medium">{item.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Director;