'use client';


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-10">
      {/* Updated icon color */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tools, stacks, animations..."
        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm hover:shadow-md focus:border-primary"
      />
    </div>
  );
}
