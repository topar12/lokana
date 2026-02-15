import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, BrainCircuit, Cable } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="card-accent-top group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-surface-strong to-brand-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_44px_rgba(0,0,0,0.35)]"
    >
        <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-black/45 p-4 text-text-secondary transition-colors group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
        <p className="whitespace-pre-line leading-relaxed text-text-secondary">
            {description}
        </p>

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
);

const Problem = () => {
    const problems = [
        {
            icon: ShieldAlert,
            title: "민감 데이터, 외부 전송 불가",
            description: "환자 차트, 설계 도면, 계약 원본 —\n클라우드에 올릴 수 없는 데이터일수록 AI 도입은 원점으로 돌아갑니다."
        },
        {
            icon: BrainCircuit,
            title: "범용 AI의 한계",
            description: "한의학 처방 원칙, 제조 공정 조건 —\n범용 모델은 현장 용어조차 구분하지 못합니다."
        },
        {
            icon: Cable,
            title: "레거시 연동의 벽",
            description: "EMR·MES·ERP와의 연결 설계에만 수 개월,\n결국 PoC도 시작하지 못하는 조직이 대부분입니다."
        }
    ];

    return (
        <section id="problem" className="relative bg-brand-black py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        도입이 멈추는 이유
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        AI를 쓰고 싶어도, <span className="text-text-secondary">보안·맥락·연동 앞에서 멈춥니다</span>
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {problems.map((prob, idx) => (
                        <ProblemCard key={prob.title} {...prob} index={idx} />
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">#한의학</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">#제조</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">#법률</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">#금융</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">#방산</span>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-primary">보안이 중요한 산업일수록, "어떻게 도입하느냐"가 "무엇을 도입하느냐"보다 먼저입니다</p>
            </div>
        </section>
    );
};

export default Problem;
