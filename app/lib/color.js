const colors = [
    "#22d3ee",
    "#491608",
    "#7def02",
    "#6d28d9",
    "#f87171",
    "#94efac",
    "#dc2626",
    "#ea580c",
    "#facc15",
    "#84cc16",
    "#2dd4bf",
    "#2563eb",
    "#db2777",
    "#881337",
    "#1e293b",
    "#94a3b8",
    "#382c2e",
    "#3573c4",
];

export default function getColor(id) {
    return colors[id % colors.length];
}