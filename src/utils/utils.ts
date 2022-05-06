export const createImageUrl = (
    imagePath: string,
    size: number
) => `https://${imagePath}?rule=mo-${size}.jpg`;