import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Improve developer experience',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        Refract aims to streamline the development process with a familiar, 
        React-inspired component model and JSX-like syntax.
      </>
    ),
  },
  {
    title: 'Optimized performance',
    Svg: require('@site/static/img/web-performance.svg').default,
    description: (
      <>
      Refract has native support for stream-based UI updates which improves performance 
      by reducing unnecessary rendering and making UI changes more efficient.
      </>
    ),
  },
  {
    title: 'Pure and Reactive UI',
    Svg: require('@site/static/img/beautiful-ui.svg').default,
    description: (
      <>
        Refract encourages developers to build UIs using pure functions, 
        which makes components more predictable and testable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
