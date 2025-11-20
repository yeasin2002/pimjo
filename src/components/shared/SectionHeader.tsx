interface SectionHeaderProps {
    icon?: React.ReactNode;
    badgeText?: string;
    title?: string;
    subtitle?: React.ReactNode;
    className?: string;
}

export const SectionHeader = ({
    icon,
    badgeText,
    title,
    subtitle,
    className = "",
}: SectionHeaderProps) => {
    return (
        <div className={`mt-20 border-t border-gray-200 ${className}`}>
            <div className="p-12">
                <div className={className.includes("text-center") ? "text-center" : ""}>
                    {(icon || badgeText) && (
                        <div className="inline-flex items-center gap-2 h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#6B7280] mb-4 border border-gray-200 rounded-full bg-white">
                            {icon}
                            {badgeText && <span className="text-sm">{badgeText}</span>}
                        </div>
                    )}
                    {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
                    {subtitle && (
                        <p className={`text-lg text-gray-600 max-w-3xl ${className.includes("text-center") ? "mx-auto" : ""}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
