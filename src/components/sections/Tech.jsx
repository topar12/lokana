import React from 'react';
import { Server, Database, Brain, ArrowDown } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const TechNode = ({ icon: Icon, label, sub, color }) => (
    <div className="z-10 flex min-w-[220px] flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-surface-strong to-brand-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
        <div className={`rounded-full border border-white/10 bg-black/45 p-4 ${color}`}>
            <Icon className="w-8 h-8" />
        </div>
        <div className="text-center">
            <h4 className="mb-1 font-bold text-white">{label}</h4>
            <p className="text-sm text-text-secondary">{sub}</p>
        </div>
    </div>
);

const Connector = () => (
    <div className="relative h-16 w-0.5 bg-gradient-to-b from-white/10 to-primary/30">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ArrowDown className="w-4 h-4 text-white/20" />
        </div>
    </div>
);

const Tech = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="tech" className="relative overflow-hidden bg-brand-black py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[130px]"></div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        아키텍처
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        외부 호출 제로. <span className="text-primary">완전 폐쇄망 설계.</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        인터넷 연결 없이도 추론이 가능하도록 설계했습니다. 모든 연산은 사내 인프라에서 완결되는 구조입니다.
                    </p>
                </div>

                <div className="mb-20 flex flex-col items-center justify-center py-12">
                    <TechNode icon={Server} label="원내/사내 서버" sub="온프레미스 인프라" color="text-text-secondary" />
                    <Connector />
                    <TechNode icon={Brain} label="LOKANA Engine" sub="LLM + 로컬 임베딩" color="text-primary" />
                    <Connector />
                    <TechNode icon={Database} label="Knowledge Base" sub="RAG + 벡터 DB" color="text-accent-cool" />
                </div>

                <div ref={ref} className="grid grid-cols-2 gap-4 border-t border-white/10 pt-16 md:grid-cols-4 md:gap-8">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 text-center transition-colors hover:border-primary/20">
                        <div className="mb-2 font-mono text-4xl font-bold text-primary md:text-5xl">
                            {inView ? <CountUp end={0} duration={2} /> : '0'}
                        </div>
                        <p className="text-sm text-text-secondary">외부 호출 (설계 기준)</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 text-center transition-colors hover:border-primary/20">
                        <div className="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
                            &lt;{inView ? <CountUp end={2} duration={2} /> : '2'}s
                        </div>
                        <p className="text-sm text-text-secondary">목표 응답 지연</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 text-center transition-colors hover:border-primary/20">
                        <div className="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
                            {inView ? <CountUp end={100} duration={2} /> : '100'}%
                        </div>
                        <p className="text-sm text-text-secondary">내부 데이터 활용 설계</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 text-center transition-colors hover:border-primary/20">
                        <div className="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
                            {inView ? <CountUp end={24} duration={2} /> : '24'}/7
                        </div>
                        <p className="text-sm text-text-secondary">무중단 운영 설계</p>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {["LangChain", "Llama 3", "LoRA/QLoRA", "RAG", "vLLM", "FastAPI"].map((tag) => (
                        <span key={tag} className="rounded border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tech;
