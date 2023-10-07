import css from './Statistics.styles.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.statisticsContent}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => {
            return (
              <li
                style={{ backgroundColor: getRandomColor() }}
                key={stat.id}
                className={css.item}
              >
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}