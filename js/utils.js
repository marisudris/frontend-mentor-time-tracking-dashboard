function generateTimeframeText(timeframe) {
    switch (timeframe) {
        case 'daily':
            return 'Day';
            break;
        case 'weekly':
            return 'Week';
            break;
        case 'monthly':
            return 'Month';
            break;

        default:
            '';
    }
}

export { generateTimeframeText };
