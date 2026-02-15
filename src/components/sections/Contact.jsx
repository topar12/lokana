import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        orgName: '',
        name: '',
        email: '',
        phone: '',
        type: 'korean_medicine',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. (데모)');
        // Implement actual submission logic (e.g., Supabase/Formspree)
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-brand-surface py-28">
            <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"></div>

            <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
                <div>
                    <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.1em] text-text-secondary">
                        도입 상담
                    </span>
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                        귀사 보안 환경에 맞는 <br /><span className="text-primary">구축 시나리오를 설계합니다</span>
                    </h2>
                    <p className="mb-10 text-lg leading-relaxed text-text-secondary">
                        네트워크 정책, 기존 시스템 구조, 데이터 민감도를 먼저 파악한 뒤,<br />
                        현실적인 구축 로드맵을 함께 만듭니다.
                    </p>

                    <div className="glow-border mb-10 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
                        <p className="font-mono text-[11px] tracking-[0.12em] text-primary">상담 핵심</p>
                        <p className="mt-1 text-sm text-white">PoC → 파일럿 → 본 구축, 단계마다 보안 검증을 포함해 설계합니다.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="mb-1 font-bold text-white">이메일</h4>
                                <p className="text-text-secondary">contact@lokana.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="mb-1 font-bold text-white">오피스</h4>
                                <p className="text-text-secondary">충남 천안시 1인 창조기업 지원센터</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="mb-1 font-bold text-white">연락처</h4>
                                <p className="text-text-secondary">010-XXXX-XXXX (Business)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel rounded-2xl border-white/10 p-8 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="orgName" className="mb-1 block font-mono text-xs text-text-secondary">소속/기업명 *</label>
                                <input
                                    id="orgName"
                                    type="text"
                                    name="orgName"
                                    required
                                    className="w-full rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                    value={formData.orgName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="mb-1 block font-mono text-xs text-text-secondary">담당자 성함 *</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="email" className="mb-1 block font-mono text-xs text-text-secondary">이메일 *</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="mb-1 block font-mono text-xs text-text-secondary">연락처</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    className="w-full rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="type" className="mb-1 block font-mono text-xs text-text-secondary">문의 유형</label>
                            <select
                                id="type"
                                name="type"
                                className="w-full rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="korean_medicine">한의학 솔루션 도입</option>
                                <option value="manufacturing">제조 솔루션 도입</option>
                                <option value="other">기타 산업군 문의</option>
                                <option value="tech">기술/개발 문의</option>
                                <option value="partnership">투자/제휴 제안</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-1 block font-mono text-xs text-text-secondary">문의 내용</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full resize-none rounded-lg border border-white/15 bg-brand-surface-strong px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="shimmer-hover flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 font-bold text-black shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_16px_40px_rgba(0,212,170,0.4)]"
                        >
                            상담 요청 보내기 <Send className="w-4 h-4 ml-1" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
