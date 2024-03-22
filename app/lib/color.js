const colors = [
    "#94efac",
    "#dc2626",
    "#ea580c",
    "#facc15",
    "#84cc16",
    "#2dd4bf",
    "#22d3ee",
    "#2563eb",
    "#6d28d9",
    "#db2777",
    "#f87171",
    "#881337",
    "#1e293b",
    "#94a3b8",
    "#7def02",
    "#382c2e",
    "#3573c4",
    "#491608",
];

export default function getColor(id) {
    return colors[id % colors.length];
}