'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/components/LanguageProvider';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const { tr } = useTranslation();
  const [tab, setTab] = useState<'login' | 'register'>('login');

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button className="auth-close" onClick={onClose} aria-label="Close">×</button>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab${tab === 'login' ? ' active' : ''}`}
            onClick={() => setTab('login')}
          >
            {tr('auth_login_tab')}
          </button>
          <button
            className={`auth-tab${tab === 'register' ? ' active' : ''}`}
            onClick={() => setTab('register')}
          >
            {tr('auth_register_tab')}
          </button>
        </div>

        {/* Login form */}
        {tab === 'login' && (
          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-label">{tr('auth_email_label')}</label>
              <input className="auth-input" type="text" autoFocus />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_password_label')}</label>
              <input className="auth-input" type="password" />
            </div>
            <button className="auth-submit">{tr('auth_login_btn')}</button>
            <p className="auth-switch">
              {tr('auth_no_account')}&nbsp;
              <span className="auth-switch-link" onClick={() => setTab('register')}>
                {tr('auth_go_register')}
              </span>
            </p>
          </div>
        )}

        {/* Register form */}
        {tab === 'register' && (
          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-label">{tr('auth_name_label')}</label>
              <input className="auth-input" type="text" autoFocus />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_email_label')}</label>
              <input className="auth-input" type="email" />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_password_label')}</label>
              <input className="auth-input" type="password" />
            </div>
            <button className="auth-submit">{tr('auth_register_btn')}</button>
            <p className="auth-switch">
              {tr('auth_have_account')}&nbsp;
              <span className="auth-switch-link" onClick={() => setTab('login')}>
                {tr('auth_go_login')}
              </span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
