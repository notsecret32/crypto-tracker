import { ChevronDown, ChevronUp, type LucideIcon } from "lucide-react";

import type { FormatterPercent } from "@/features/home/types/formatters";

export function formatPrice(price: number): string {
    return `$${price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

export function formatPercent(percent: number): FormatterPercent {
    var className = ''
    var Icon: LucideIcon
    
    if (percent < 0) {
        className = "text-red-500"
        Icon = ChevronDown
    } else {
        className = "text-green-500"
        Icon = ChevronUp
    }

    return {
        result: `${Math.abs(percent).toFixed(2)}%`,
        className,
        Icon
    }
}