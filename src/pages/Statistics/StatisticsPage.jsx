import React from 'react';
import styles from './StatisticsPage.module.css';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ReactComponent as FireIcon } from '../../assets/icons/fire.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book2.svg';
import { ReactComponent as TargetIcon } from '../../assets/icons/target.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star2.svg';

const barData = [
  { name: 'Пн', uv: 60, max: 100 },
  { name: 'Вт', uv: 35, max: 100 },
  { name: 'Ср', uv: 45, max: 100 },
  { name: 'Чт', uv: 75, max: 100 },
  { name: 'Пт', uv: 60, max: 100 },
  { name: 'Сб', uv: 65, max: 100 },
  { name: 'Вс', uv: 58, max: 100 },
];

const maxValue = Math.max(...barData.map(d => d.uv));

const pieData = [
  { name: 'Испанский', value: 65, color: '#6366F1' },
  { name: 'Английский', value: 25, color: '#F59E0C' },
  { name: 'Хинди', value: 10, color: '#22C55E' },
];

const StatisticsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardRow}>
        <div className={styles.card}>
          <div className={styles.cardTop}><span>Учебный страйк</span><FireIcon /></div>
          <div className={styles.cardMain}>15 дней</div>
          <div className={styles.cardBottom}>Так держать!</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}><span>Выучено слов</span><BookIcon /></div>
          <div className={styles.cardMain}>198</div>
          <div className={styles.cardBottomGreen}>↑ +23 слова за неделю</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}><span>Точность</span><TargetIcon /></div>
          <div className={styles.cardMain}>97%</div>
          <div className={styles.cardBottomGreen}>↑ +12% на этой неделе</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}><span>Ачивки</span><StarIcon className={styles.yellowIcon} /></div>
          <div className={styles.cardMain}>1200</div>
          <div className={styles.cardBottom}>/ поинтов - 12 лвл</div>
        </div>
      </div>


      <div className={styles.graphRow}>
        <div className={styles.barBlock}>
          <div className={styles.graphHeader}>
            <h3>Недельная статистика обучения</h3>
            <div className={styles.toggleGroup}>
              <button className={`${styles.toggleBtn} ${styles.active}`}>Ежедневно</button>
              <button className={styles.toggleBtn}>Еженедельно</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={176}>
              <BarChart data={barData} barSize={33} barCategoryGap="39%">
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#9CA3AF', fontSize: 16, dy: 8 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar
                  dataKey="uv"
                  radius={[8, 8, 8, 8]}
                  background={({ x, y, width, height }) => {
                    const maxHeight = (height / barData.find(d => d.uv === maxValue).uv) * maxValue;
                    const fullY = y - (maxHeight - height);
                    return (
                      <rect
                        x={x}
                        y={fullY}
                        width={width}
                        height={maxHeight}
                        rx={8}
                        ry={8}
                        fill="#2C3245"
                      />
                    );
                  }}
                >
                  {barData.map((_, index) => (
                    <Cell key={`uv-${index}`} fill="#5046E5" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>


<div className={styles.pieBlock}>
  <h3 className={styles.sectionTitle}>Языковой микс</h3>
  <div className={styles.pieChartContainer}>
    <PieChart width={150} height={150}>
  <Pie
    data={pieData}
    cx="50%"
    cy="50%"
    innerRadius={60}       
    outerRadius={72}        
    paddingAngle={1}
    dataKey="value"
    stroke="none"
  >
    {pieData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Pie>

  <text
    x="50%"
    y="44%"
    textAnchor="middle"
    dominantBaseline="central"
    fill="white"
    fontSize={28}
    fontWeight="700"
  >
    65%
  </text>

  <text
    x="50%"
    y="60%"
    textAnchor="middle"
    dominantBaseline="central"
    fill="#9CA3AF"
    fontSize={18}
  >
    Испанский
  </text>
</PieChart>

  </div>

  <div className={styles.pieLegend}>
  {pieData.map((item, index) => (
    <div key={index} className={styles.legendItem}>
      <span className={styles.dot} style={{ backgroundColor: item.color }}></span>
      <span className={styles.language}>{item.name}</span>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ backgroundColor: item.color, width: `${item.percent}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>

</div>

      </div>
    </div>
  );
};

export default StatisticsPage;
