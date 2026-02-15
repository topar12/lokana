import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, BrainCircuit, Cable, CheckCircle, Lock, Server, Cpu, Database, Users } from 'lucide-react';

const SectionHeader = ({ badge, title, subtitle }) => (
    <div className="mb-10 text-center px-6">
        <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-wider text-text-secondary">
            {badge}
        </span>
        <h2 className="text-2xl font-bold leading-tight text-white">
            {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-text-muted">{subtitle}</p>}
    </div>
);

const MobileCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 mb-4"
    >
        <div className="mb-4 inline-flex rounded-lg bg-black/40 p-3 text-primary">
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line">{description}</p>
    </motion.div>
);

const MobileSections = () => {
    return (
        <div className="space-y-24 pb-20">
            {/* Problem Section */}
            <section id="problem">
                <SectionHeader
                    badge="PROBLEM"
                    title={<span>AI 도입,<br /><span className="text-text-secondary">왜 현장에서 멈출까요?</span></span>}
                />
                <div className="px-5">
                    <MobileCard
                        icon={ShieldAlert}
                        title="데이터 유출 걱정"
                        description="환자 차트, 설계 도면, 계약서... 외부 전송이 불가능한 민감 데이터입니다."
                    />
                    <MobileCard
                        icon={BrainCircuit}
                        title="범용 모델의 한계"
                        description="우리 현장만의 용어와 맥락을 일반 AI는 이해하지 못합니다."
                        delay={0.1}
                    />
                    <MobileCard
                        icon={Cable}
                        title="복잡한 연동"
                        description="기존 레거시 시스템(EMR, ERP)과 연결하는 데만 수개월이 걸립니다."
                        delay={0.2}
                    />
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="bg-gradient-to-b from-brand-black to-brand-surface/30 py-10">
                <SectionHeader
                    badge="SOLUTION"
                    title={<span>LOKANA는<br />경계 안에서 답합니다</span>}
                />
                <div className="px-5">
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center mb-6">
                        <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-white mb-2">온프레미스 완벽 구동</h3>
                        <p className="text-sm text-text-secondary">인터넷 연결 없이도<br />사내 서버에서 독립적으로 실행됩니다.</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                            <CheckCircle className="h-5 w-5 text-accent-cool shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-white text-sm">데이터 주권 보장</h4>
                                <p className="text-xs text-text-muted mt-1">모든 데이터는 귀사의 통제 하에 있습니다.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                            <CheckCircle className="h-5 w-5 text-accent-cool shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-white text-sm">맞춤형 미세조정</h4>
                                <p className="text-xs text-text-muted mt-1">현장 특화 지식을 학습하여 정확도를 높입니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section id="tech">
                <SectionHeader
                    badge="TECHNOLOGY"
                    title="검증된 기술력"
                />
                <div className="px-5 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-brand-surface border border-white/5 text-center">
                        <Server className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-bold text-white mb-1">Light</div>
                        <div className="text-[10px] text-text-muted">경량화 모델 최적화</div>
                    </div>
                    <div className="p-4 rounded-xl bg-brand-surface border border-white/5 text-center">
                        <Cpu className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-bold text-white mb-1">Fast</div>
                        <div className="text-[10px] text-text-muted">낮은 지연 시간</div>
                    </div>
                    <div className="p-4 rounded-xl bg-brand-surface border border-white/5 text-center">
                        <Database className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-bold text-white mb-1">RAG</div>
                        <div className="text-[10px] text-text-muted">검색 증강 생성</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileSections;
