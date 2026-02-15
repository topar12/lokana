import React from 'react';

const TimelineItem = ({ year, title, desc, align }) => (
    <div className={`relative mb-8 flex w-full items-center justify-between md:justify-normal ${align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="order-1 hidden w-5/12 md:block"></div>
        <div className="timeline-dot-glow order-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-brand-surface">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
        </div>
        <div className={`order-1 w-full rounded-xl border border-white/10 bg-gradient-to-br from-brand-surface-strong to-brand-surface p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg md:w-5/12 ${align === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
            <h3 className="mb-1 text-lg font-bold text-primary">{year}</h3>
            <h4 className="mb-2 font-bold text-white">{title}</h4>
            <p className="text-sm leading-relaxed text-text-secondary">{desc}</p>
        </div>
    </div>
);

const Vision = () => {
    return (
        <section id="vision" className="relative overflow-hidden bg-brand-surface py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        확장 로드맵
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        한 산업씩 시작하고, <span className="text-primary">한 산업씩 확장합니다</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-text-secondary">
                        한의원에서 첫 걸음을 시작합니다.<br />
                        검증을 마친 뒤, 순차적으로 확장합니다.
                    </p>
                </div>

                <div className="relative h-full overflow-hidden p-4 md:p-10">
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-white/10 via-primary/30 to-primary/50 md:left-1/2 md:-translate-x-1/2"></div>

                    <TimelineItem
                        align="left"
                        year="2026 상반기"
                        title="PoC 시작"
                        desc="한의원 진료 프로토콜 PoC를 시작하고, 제조 현장 파일럿을 준비합니다."
                    />
                    <TimelineItem
                        align="right"
                        year="2026 하반기"
                        title="서비스 준비"
                        desc="PoC 결과를 바탕으로 온프레미스 구독형 서비스를 준비하고 초기 고객을 확보합니다."
                    />
                    <TimelineItem
                        align="left"
                        year="2027"
                        title="산업 확장"
                        desc="병원급 의료와 제조 솔루션 고도화, 법률·특허 분야 R&D를 추진합니다."
                    />
                    <TimelineItem
                        align="right"
                        year="2028"
                        title="해외 진출"
                        desc="동남아 시장으로 확장하고, 다국어 지원 엔진을 적용합니다."
                    />
                </div>
            </div>
        </section>
    );
};

export default Vision;
