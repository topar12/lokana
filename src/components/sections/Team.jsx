import React from 'react';
import { User } from 'lucide-react';

const TeamMember = ({ name, position, bio, highlight }) => (
    <div className="card-accent-top group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-surface-strong to-brand-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_38px_rgba(0,0,0,0.35)]">
        <div className="mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10 transition-all group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(0,212,170,0.2)]">
            <User className="w-10 h-10 text-white/50 transition-colors group-hover:text-primary/70" />
        </div>
        <h3 className="mb-1 text-xl font-bold text-white">{name}</h3>
        <p className="mb-4 font-mono text-sm text-primary">{position}</p>
        <div className="mb-4 h-0.5 w-10 bg-white/10 transition-colors group-hover:bg-primary"></div>
        <p className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">
            {bio}
        </p>
        {highlight && (
            <div className="mt-4 border-t border-white/10 pt-4">
                <span className="font-mono text-xs text-accent-cool">{highlight}</span>
            </div>
        )}
    </div>
);

const Team = () => {
    return (
        <section id="team" className="relative bg-brand-black py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        팀
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        현장 경험이 <span className="text-text-secondary">설계를 만듭니다</span>
                    </h2>
                </div>

                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    <TeamMember
                        name="이주호"
                        position="대표 | AI 엔지니어"
                        bio={`충남대학교 생화학 전공\n국립공주대학교 IT융합공학 석사과정\n\nAI 시스템 설계·개발과\n1인 제조업 밸류체인 운영 경험 보유`}
                        highlight="Bio-IT 융합 전문"
                    />
                    <TeamMember
                        name="한의학 자문위원"
                        position="자문위원 | 한의사"
                        bio={`현직 한의사\n대한한의사협회 정회원\n\n진료 프로토콜 설계와\n한의학 도메인 데이터 검증 담당`}
                        highlight="임상 도메인 전문가"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
