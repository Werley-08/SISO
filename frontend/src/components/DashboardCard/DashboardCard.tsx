import React from 'react';
import './DashboardCard.css';

interface DashboardCardProps {
  title: string;
  value: string | number;
  className?: string;
  children?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, className = '', children }) => {
  return (
    <div className={`dashboard-card ${className}`} tabIndex={0}>
      <h3>{title}</h3>
      <span className="dashboard-card__number">{value}</span>
      {children}
    </div>
  );
};

export default DashboardCard; 