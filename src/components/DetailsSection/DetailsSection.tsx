import styles from "./index.module.css";

export const DetailsSection = () => {
  const renderColorCard = () => {
    const colors = [
      { name: "Бежевый", hex: "#F5F5DC" },
      { name: "Бордовый", hex: "#800020" },
      { name: "Золотой", hex: "#FFD700" },
      { name: "Серебряный", hex: "#C0C0C0" },
    ];

    return (
      <div className={styles.color__cards}>
        {colors.map((color) => (
          <div key={color.name} className={styles.color__card}>
            <div
              className={styles.color__swatch}
              style={{ backgroundColor: color.hex }}
            />
            <span className={styles.color__name}>{color.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.details__section}>
      <p className={styles.details__title}>Дресс-код</p>
      <p className={styles.details__description}>
        Нам будет очень приятно, если вы учтете наши пожелания и при выборе
        одежды предпочтете вечерние наряды в представленной ниже гамме:
      </p>
      {renderColorCard()}
    </div>
  );
};
