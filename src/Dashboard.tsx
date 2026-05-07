import { useState } from 'react';

// ── Asset paths (served from /public/assets/) ─────────────────────────────────
const A = {
  logo:         '/assets/logo.png',
  dashA:        '/assets/icon-dash-1.png',
  dashB:        '/assets/icon-dash-2.png',
  payA:         '/assets/icon-pay-1.png',
  payB:         '/assets/icon-pay-2.png',
  payC:         '/assets/icon-pay-3.png',
  payersA:      '/assets/icon-payers-1.png',
  payersB:      '/assets/icon-payers-2.png',
  payersC:      '/assets/icon-payers-3.png',
  payersD:      '/assets/icon-payers-4.png',
  settingsA:    '/assets/icon-settings-1.png',
  settingsB:    '/assets/icon-settings-2.png',
  helpA:        '/assets/icon-help-1.png',
  helpB:        '/assets/icon-help-2.png',
  helpC:        '/assets/icon-help-3.png',
  paidA:        '/assets/icon-kpi-paid-1.png',
  paidB:        '/assets/icon-kpi-paid-2.png',
  paidC:        '/assets/icon-kpi-paid-3.png',
  pendingA:     '/assets/icon-kpi-pend-1.png',
  pendingB:     '/assets/icon-kpi-pend-2.png',
  pendingC:     '/assets/icon-kpi-pend-3.png',
  pendingD:     '/assets/icon-kpi-pend-4.png',
  declinedA:    '/assets/icon-kpi-decl-1.png',
  declinedB:    '/assets/icon-kpi-decl-2.png',
  rejectedA:    '/assets/icon-kpi-rej-1.png',
  rejectedB:    '/assets/icon-kpi-rej-2.png',
  rejectedC:    '/assets/icon-kpi-rej-3.png',
  sortA:        '/assets/icon-sort-1.png',
  sortB:        '/assets/icon-sort-2.png',
  sortC:        '/assets/icon-sort-3.png',
  sortD:        '/assets/icon-sort-4.png',
  eyeA:         '/assets/icon-eye-1.png',
  eyeB:         '/assets/icon-eye-2.png',
  linkA:        '/assets/icon-link-1.png',
  linkB:        '/assets/icon-link-2.png',
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconDashboard() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_12.5%]"><div className="absolute inset-[-2.5%_-2.78%]"><img alt="" className="block max-w-none size-full" src={A.dashA} /></div></div>
      <div className="absolute bottom-[8.33%] left-[37.5%] right-[37.5%] top-1/2"><div className="absolute inset-[-5%_-8.33%]"><img alt="" className="block max-w-none size-full" src={A.dashB} /></div></div>
    </div>
  );
}
function IconPayments() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_16.67%]"><div className="absolute inset-[-2.5%_-3.13%]"><img alt="" className="block max-w-none size-full" src={A.payA} /></div></div>
      <div className="absolute inset-[33.33%]"><div className="absolute inset-[-6.25%]"><img alt="" className="block max-w-none size-full" src={A.payB} /></div></div>
      <div className="absolute bottom-[29.17%] left-1/2 right-1/2 top-[29.17%]"><div className="absolute inset-[-5%_-0.5px]"><img alt="" className="block max-w-none size-full" src={A.payC} /></div></div>
    </div>
  );
}
function IconPayers() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]"><div className="absolute inset-[-8.33%_-3.57%]"><img alt="" className="block max-w-none size-full" src={A.payersA} /></div></div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]"><div className="absolute inset-[-6.25%]"><img alt="" className="block max-w-none size-full" src={A.payersB} /></div></div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]"><div className="absolute inset-[-8.52%_-16.67%]"><img alt="" className="block max-w-none size-full" src={A.payersC} /></div></div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]"><div className="absolute inset-[-6.45%_-16.62%_-6.45%_-16.63%]"><img alt="" className="block max-w-none size-full" src={A.payersD} /></div></div>
    </div>
  );
}
function IconSettings() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_12.43%]"><div className="absolute inset-[-2.5%_-2.77%]"><img alt="" className="block max-w-none size-full" src={A.settingsA} /></div></div>
      <div className="absolute inset-[37.5%]"><div className="absolute inset-[-8.33%]"><img alt="" className="block max-w-none size-full" src={A.settingsB} /></div></div>
    </div>
  );
}
function IconHelp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%]"><div className="absolute inset-[-2.5%]"><img alt="" className="block max-w-none size-full" src={A.helpA} /></div></div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.88%]"><div className="absolute inset-[-8.33%_-8.58%]"><img alt="" className="block max-w-none size-full" src={A.helpB} /></div></div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]"><div className="absolute inset-[-0.5px_-4999.89%]"><img alt="" className="block max-w-none size-full" src={A.helpC} /></div></div>
    </div>
  );
}
function IconSort() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[66.67%_12.5%_16.67%_54.17%]"><div className="absolute inset-[-15%_-7.5%]"><img alt="" className="block max-w-none size-full" src={A.sortA} /></div></div>
      <div className="absolute inset-[16.67%_29.17%_16.67%_70.83%]"><div className="absolute inset-[-3.75%_-0.5px]"><img alt="" className="block max-w-none size-full" src={A.sortB} /></div></div>
      <div className="absolute inset-[16.67%_54.17%_66.67%_12.5%]"><div className="absolute inset-[-15%_-7.5%]"><img alt="" className="block max-w-none size-full" src={A.sortC} /></div></div>
      <div className="absolute inset-[16.67%_70.83%_16.67%_29.17%]"><div className="absolute inset-[-3.75%_-0.5px]"><img alt="" className="block max-w-none size-full" src={A.sortD} /></div></div>
    </div>
  );
}
function IconKpiPaid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bottom-1/2 left-[12.5%] right-[12.5%] top-[12.5%]"><div className="absolute inset-[-5.56%_-2.78%]"><img alt="" className="block max-w-none size-full" src={A.paidA} /></div></div>
      <div className="absolute inset-[20.83%_12.5%_12.5%_12.5%]"><div className="absolute inset-[-3.13%_-2.78%]"><img alt="" className="block max-w-none size-full" src={A.paidB} /></div></div>
      <div className="absolute bottom-[33.33%] left-[66.67%] right-[8.33%] top-1/2"><div className="absolute inset-[-12.5%_-8.33%]"><img alt="" className="block max-w-none size-full" src={A.paidC} /></div></div>
    </div>
  );
}
function IconKpiPending() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-1/4"><div className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={A.pendingA} /></div></div>
      <div className="absolute bottom-[45.83%] left-1/2 right-[45.83%] top-[41.67%]"><div className="absolute inset-[-16.67%_-50%]"><img alt="" className="block max-w-none size-full" src={A.pendingB} /></div></div>
      <div className="absolute inset-[8.33%_32.79%_68.08%_32.75%]"><div className="absolute inset-[-8.83%_-6.05%_-8.84%_-6.05%]"><img alt="" className="block max-w-none size-full" src={A.pendingC} /></div></div>
      <div className="absolute inset-[67.96%_32.46%_8.46%_32.83%]"><div className="absolute inset-[-8.84%_-6%_-8.83%_-6%]"><img alt="" className="block max-w-none size-full" src={A.pendingD} /></div></div>
    </div>
  );
}
function IconKpiDeclined() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%]"><div className="absolute inset-[-2.5%]"><img alt="" className="block max-w-none size-full" src={A.declinedA} /></div></div>
      <div className="absolute inset-[41.67%_37.5%]"><div className="absolute inset-[-12.5%_-8.33%]"><img alt="" className="block max-w-none size-full" src={A.declinedB} /></div></div>
    </div>
  );
}
function IconKpiRejected() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%]"><div className="absolute inset-[-2.5%]"><img alt="" className="block max-w-none size-full" src={A.rejectedA} /></div></div>
      <div className="absolute inset-[37.5%]"><div className="absolute inset-[-8.33%]"><img alt="" className="block max-w-none size-full" src={A.rejectedB} /></div></div>
      <div className="absolute inset-[37.5%]"><div className="absolute inset-[-8.33%]"><img alt="" className="block max-w-none size-full" src={A.rejectedC} /></div></div>
    </div>
  );
}
function IconEye() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[20.83%_8.33%]"><div className="absolute inset-[-4.29%_-3%]"><img alt="" className="block max-w-none size-full" src={A.eyeA} /></div></div>
      <div className="absolute inset-[37.5%]"><div className="absolute inset-[-10%]"><img alt="" className="block max-w-none size-full" src={A.eyeB} /></div></div>
    </div>
  );
}
function IconExternalLink() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[29.17%]"><div className="absolute inset-[-5%]"><img alt="" className="block max-w-none size-full" src={A.linkA} /></div></div>
      <div className="absolute inset-[29.17%]"><div className="absolute inset-[-5%]"><img alt="" className="block max-w-none size-full" src={A.linkB} /></div></div>
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Dashboard', icon: IconDashboard },
  { label: 'Payments',  icon: IconPayments  },
  { label: 'Payers',    icon: IconPayers    },
  { label: 'Settings',  icon: IconSettings  },
  { label: 'Help',      icon: IconHelp      },
];

function Sidebar({ active }: { active: string }) {
  return (
    <aside className="w-[315px] shrink-0 bg-surface-container-lowest border-r border-border-subtle flex flex-col h-screen">
      <div className="h-[100px] flex items-center justify-center border-b border-border-subtle">
        <img src={A.logo} alt="American Express" className="w-[70px] h-[70px] object-contain" />
      </div>
      <nav className="flex flex-col gap-4 px-8 pt-8 flex-1">
        {NAV_ITEMS.map(({ label, icon: Icon }) => {
          const isActive = label === active;
          return (
            <a key={label} href="#" className={`flex items-center gap-3 pl-3 pr-4 py-3 rounded-s text-body-md font-medium transition-colors ${isActive ? 'border border-brand-primary text-brand-primary-text' : 'text-content-default hover:bg-surface-state-low'}`}>
              <Icon />
              {label}
            </a>
          );
        })}
      </nav>
      <div className="px-8 py-8 border-t border-border-subtle">
        <p className="text-caption-md text-content-subtle">Boost v0.1</p>
        <a href="#" className="text-caption-md text-content-subtle hover:underline">Privacy Policy</a>
      </div>
    </aside>
  );
}

// ── Toggle & Time Range ───────────────────────────────────────────────────────
function VolumeCountToggle() {
  const [isCount, setIsCount] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <span className="text-body-sm font-medium text-content-default">Volume</span>
      <button role="switch" aria-checked={isCount} onClick={() => setIsCount(v => !v)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isCount ? 'bg-brand-primary' : 'bg-border-subtle'}`}>
        <span className={`inline-block h-3.5 w-3.5 rounded-full bg-surface-container-lowest shadow transition-transform ${isCount ? 'translate-x-4' : 'translate-x-1'}`} />
      </button>
      <span className="text-body-sm font-medium text-content-default">Count</span>
    </div>
  );
}

type TimeRange = 'WTD' | 'MTD' | 'YTD';
function TimeRangeSelector({ value, onChange }: { value: TimeRange; onChange: (v: TimeRange) => void }) {
  return (
    <div className="flex rounded-sm border border-border-subtle overflow-hidden">
      {(['WTD', 'MTD', 'YTD'] as TimeRange[]).map(t => (
        <button key={t} onClick={() => onChange(t)}
          className={`px-4 py-1.5 text-body-sm font-medium transition-colors ${value === t ? 'bg-brand-primary text-content-knockout' : 'bg-surface-container-lowest text-content-subtle hover:bg-surface-state-low'}`}>
          {t}
        </button>
      ))}
    </div>
  );
}

// ── KPI Card ──────────────────────────────────────────────────────────────────
function KpiCard({ label, value, icon: Icon }: { label: string; value: string; icon: React.FC }) {
  return (
    <div className="bg-surface-container-lowest rounded-sm border border-border-subtle p-4 flex flex-col gap-4 flex-1 h-[168px]">
      <div className="flex items-center gap-2 w-full">
        <span className="flex-1 text-title-sm font-semibold text-content-subtle">{label}</span>
        <Icon />
      </div>
      <span className="text-headline-lg font-semibold text-content-on-surface">{value}</span>
    </div>
  );
}

// ── Status Badge ──────────────────────────────────────────────────────────────
type Status = 'Pending' | 'Paid' | 'Declined' | 'Rejected';
const STATUS_STYLES: Record<Status, string> = {
  Pending:  'border-border-secondary bg-[#fefcf6] text-[#614a1b]',
  Paid:     'border-[#22c55e] bg-[#f0fdf4] text-[#166534]',
  Declined: 'border-border-subtle bg-surface-state-low text-content-default',
  Rejected: 'border-border-subtle bg-surface-state-low text-content-default',
};
function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`px-3 py-0.5 rounded-full border text-caption-md font-medium whitespace-nowrap ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

// ── Invoice Chip ──────────────────────────────────────────────────────────────
function InvoiceChip({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-2 bg-[#f2f8fc] border border-brand-primary rounded-full px-3 py-0.5 shrink-0">
      <span className="text-caption-md font-medium text-brand-primary-text whitespace-nowrap">
        {count} {count === 1 ? 'Invoice' : 'Invoices'}
      </span>
      <IconExternalLink />
    </div>
  );
}

// ── Payments Table ────────────────────────────────────────────────────────────
type Payment = {
  id: string; payerName: string; invoiceAmount: string;
  invoiceCount: number; status: Status;
  invoiceReceived: string; invoiceDue: string; paymentProcessed: string;
};

const PAYMENTS: Payment[] = [
  { id: 'pm_1MC7I...', payerName: 'Acme Corporation', invoiceAmount: '$ 1,000', invoiceCount: 24, status: 'Pending', invoiceReceived: '10/17/2026', invoiceDue: '10/17/2026', paymentProcessed: '10/17/2026' },
  { id: 'pm_1MC7I...', payerName: 'Acme Corporation', invoiceAmount: '$ 1,000', invoiceCount: 1,  status: 'Pending', invoiceReceived: '10/17/2026', invoiceDue: '10/17/2026', paymentProcessed: '10/17/2026' },
  { id: 'pm_1MC7I...', payerName: 'Acme Corporation', invoiceAmount: '$ 1,000', invoiceCount: 1,  status: 'Pending', invoiceReceived: '10/17/2026', invoiceDue: '10/17/2026', paymentProcessed: '10/17/2026' },
  { id: 'pm_1MC7I...', payerName: 'Acme Corporation', invoiceAmount: '$ 1,000', invoiceCount: 1,  status: 'Pending', invoiceReceived: '10/17/2026', invoiceDue: '10/17/2026', paymentProcessed: '10/17/2026' },
  { id: 'pm_1MC7I...', payerName: 'Acme Corporation', invoiceAmount: '$ 1,000', invoiceCount: 1,  status: 'Pending', invoiceReceived: '10/17/2026', invoiceDue: '10/17/2026', paymentProcessed: '10/17/2026' },
];

const COLUMNS = ['Payment ID', 'Payer Name', 'Invoice Amount', 'Invoices', 'Status', 'Invoice Received', 'Invoice Due', 'Payment Pro...'];

function PendingPaymentsTable() {
  return (
    <div className="bg-surface-container-lowest rounded-m border border-border-subtle overflow-hidden">
      <div className="flex items-center justify-between px-6 py-6">
        <h2 className="text-title-lg font-semibold text-content-default">Pending Payments</h2>
        <button className="bg-brand-primary text-content-knockout text-body-md font-medium px-4 py-2 h-[40px] rounded-sm hover:opacity-90 transition-opacity">
          See More
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border-default">
            {COLUMNS.map(col => (
              <th key={col} className="text-left text-body-md font-medium text-content-default pl-6 pr-3 py-2 whitespace-nowrap">
                <span className="flex items-center gap-[10px]">{col}<IconSort /></span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PAYMENTS.map((p, i) => (
            <tr key={i} className="border-b border-border-subtle last:border-b-0 hover:bg-surface-state-low transition-colors">
              <td className="pl-6 pr-3 h-[80px]"><span className="flex items-center gap-[10px] text-body-sm text-content-default whitespace-nowrap">{p.id}<IconEye /></span></td>
              <td className="px-3 h-[80px] text-body-sm text-content-default whitespace-nowrap">{p.payerName}</td>
              <td className="px-[14px] h-[80px] text-body-sm text-content-default whitespace-nowrap">{p.invoiceAmount}</td>
              <td className="px-3 h-[80px]"><InvoiceChip count={p.invoiceCount} /></td>
              <td className="px-3 h-[80px]"><StatusBadge status={p.status} /></td>
              <td className="px-3 h-[80px] text-body-sm text-content-default whitespace-nowrap">{p.invoiceReceived}</td>
              <td className="px-3 h-[80px] text-body-sm text-content-default whitespace-nowrap">{p.invoiceDue}</td>
              <td className="px-3 h-[80px] text-body-sm text-content-default whitespace-nowrap">{p.paymentProcessed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 border-t border-border-subtle">
        <span className="text-body-sm text-content-subtle">Showing 5 of 50 Pending Payments</span>
      </div>
    </div>
  );
}

// ── Dashboard Page ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('MTD');

  return (
    <div className="flex h-screen bg-surface-default font-sans">
      <Sidebar active="Dashboard" />

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-end px-10 py-6 bg-surface-container-lowest border-b border-border-subtle">
          <a className="flex items-center gap-3 cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-s bg-brand-primary flex items-center justify-center shrink-0">
              <span className="text-content-knockout text-body-md font-medium">LL</span>
            </div>
            <span className="text-body-md font-medium text-content-default">Laura</span>
          </a>
        </header>

        <main className="flex-1 overflow-auto p-10 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-m border border-border-subtle p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-title-lg font-semibold text-content-default">Dashboard</h1>
              <div className="flex items-center gap-[64px]">
                <VolumeCountToggle />
                <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { label: 'Paid',     value: '$100,000', icon: IconKpiPaid     },
                { label: 'Pending',  value: '$5,000',   icon: IconKpiPending  },
                { label: 'Declined', value: '$500',     icon: IconKpiDeclined },
                { label: 'Rejected', value: '$2,000',   icon: IconKpiRejected },
              ].map(card => <KpiCard key={card.label} {...card} />)}
            </div>
          </div>

          <PendingPaymentsTable />
        </main>
      </div>
    </div>
  );
}
