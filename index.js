function pipeop(initial, def, ...rest) {
    if (!def) {
        return initial;
    }
    const [func, ...args] = typeof def === 'function' ? [def, []] : def;
    return initial instanceof Promise || initial.then && initial.catch
        ? initial.then(resolved => pipeop(func(resolved, ...args), ...rest))
        : pipeop(func(initial, ...args), ...rest);
};

module.exports = pipeop;
