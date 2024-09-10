function convertToCamelCase() {
    const text = document.querySelector('textarea').value;
    const textArray = text.split('\n');
    const result = [];
    for (const [i, line] of textArray.entries()) {
        const [first, second] = line.trim().toLowerCase().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        result.push(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
    document.querySelector('textarea').value = result.join('\n');
}
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button')).textContent = 'Convert to camelCase';
document.querySelector('button').addEventListener('click', convertToCamelCase);

