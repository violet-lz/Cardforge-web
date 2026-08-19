import { useEffect, useRef, type ReactNode } from 'react';

interface GameModalProps { open: boolean; onClose: () => void; title: string; icon?: string; variant?: 'danger' | 'info'; children: ReactNode; actions?: ReactNode; }
export function GameModal({ open, onClose, title, icon, variant = 'info', children, actions }: GameModalProps) {
 const dialogRef = useRef<HTMLDialogElement>(null);
 useEffect(() => { const el = dialogRef.current; if (!el) return; if (open && !el.open) el.showModal(); else if (!open && el.open) el.close(); }, [open]);
 if (!open) return null;
 return <dialog ref={dialogRef} className={`game-modal modal-${variant}`} onCancel={onClose} onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}>
  <div className="game-modal-content">
   <button className="game-modal-close" onClick={onClose} aria-label="Close">×</button>
   <header className="game-modal-header">{icon && <span className="game-modal-icon" aria-hidden="true">{icon}</span>}<h2>{title}</h2></header>
   <hr className="game-modal-rule" />
   <div className="game-modal-body">{children}</div>
   {actions && <footer className="game-modal-actions">{actions}</footer>}
  </div>
 </dialog>;
}
