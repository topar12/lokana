import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, FileHeart, DatabaseZap, Search, GitBranch, Link as LinkIcon, ArrowRight } from 'lucide-react';

const Solution = () => {
    const [activeTab, setActiveTab] = useState('medicine'); // medicine | manufacturing

    const content = {
        medicine: {
            title: "한의학 솔루션 설계",
            color: "text-accent-warm",
            items: [
                {
                    icon: Stethoscope,
                    title: "진료 기준 일관성 확보",
                    desc: "원장의 처방 원칙과 진료 절차를 RAG로 내재화합니다.\n신규 의료진도 동일 기준으로 즉시 진료에 투입됩니다."
                },
                {
                    icon: FileHeart,
                    title: "증상 기반 처방 근거 검색",
                    desc: "증상·체질·이력 조합으로 유사 케이스를 수 초 만에 찾아,\n처방 판단 속도를 높입니다."
                },
                {
                    icon: DatabaseZap,
                    title: "EMR 자동 연동",
                    desc: "전자의무기록 시스템에 직접 연결해 반복 입력을 없애고,\n진료 데이터를 안전하게 축적합니다."
                }
            ]
        },
        manufacturing: {
            title: "제조 솔루션 설계",
            color: "text-accent-cool",
            items: [
                {
                    icon: Search,
                    title: "현장 문서 즉시 검색",
                    desc: "매뉴얼·도면·작업지시서를 하나의 질의로 통합 검색합니다.\n현장 질문에 즉답합니다."
                },
                {
                    icon: GitBranch,
                    title: "불량 원인 추적 단축",
                    desc: "과거 이력·유사 패턴을 자동 매칭해,\n원인 분석(RCA) 시간을 절반 이하로 줄입니다."
                },
                {
                    icon: LinkIcon,
                    title: "MES·ERP 실시간 연결",
                    desc: "레거시 시스템 데이터를 자동 파이프라인으로 연결해,\n운영 데이터가 AI에 실시간 반영됩니다."
                }
            ]
        }
    };

    return (
        <section id="solution" className="relative overflow-hidden bg-brand-surface py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        솔루션 설계
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        현장에 맞게 설계하고, <span className="text-primary">같은 구조를 다음 산업에 적용합니다</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-text-secondary">
                        한의원을 첫 적용 대상으로 PoC를 준비하고 있습니다. 도메인 데이터만 바꾸면 같은 파이프라인이 그대로 작동합니다.
                    </p>
                </div>

                <div className="mb-12 flex justify-center">
                    <div className="flex gap-1 rounded-full border border-white/15 bg-black/40 p-1.5 backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => setActiveTab('medicine')}
                            className={`rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 md:text-base ${activeTab === 'medicine'
                                ? 'bg-accent-warm text-black shadow-lg shadow-accent-warm/30'
                                : 'text-text-secondary hover:text-white'
                                }`}
                        >
                            한의학
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('manufacturing')}
                            className={`rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 md:text-base ${activeTab === 'manufacturing'
                                ? 'bg-accent-cool text-black shadow-lg shadow-accent-cool/30'
                                : 'text-text-secondary hover:text-white'
                                }`}
                        >
                            제조
                        </button>
                    </div>
                </div>

                <div className="mb-12 text-center">
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-text-secondary">
                        병원·법률·금융·공공 등 데이터 보안과 도메인 맥락이 중요한 산업에도 동일한 구조로 확장됩니다.
                    </p>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid gap-8 md:grid-cols-3"
                        >
                            {content[activeTab].items.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-surface-strong via-brand-surface to-brand-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_44px_rgba(0,0,0,0.35)]"
                                >
                                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                                    <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[11px] text-primary/70">
                                        {`0${idx + 1}`}
                                    </span>
                                    <div className={`mb-6 w-fit rounded-xl border border-white/10 bg-black/40 p-4 transition-colors group-hover:border-primary/20 ${content[activeTab].color}`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                                    <p className="whitespace-pre-line leading-relaxed text-text-secondary">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <div className="glow-border inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/35 px-6 py-3 text-primary backdrop-blur-md">
                        <ArrowRight className="w-5 h-5" />
                        <span className="font-medium">한의원에서 시작합니다 — 구조는 이미 다음 산업을 위해 설계되어 있습니다</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
