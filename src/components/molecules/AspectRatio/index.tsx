import { useMemo } from 'react';

import Styles from './index.module.scss';
import { AspectRatioProps } from './types';

export const AspectRatio: React.FC = (props: AspectRatioProps) => {
  const ratio = useMemo(() => {
    const valid = new RegExp(/^[0-9]{1,}\/[0,9]{1,}$/);
    let ratio = 1 / 1;

    if (!props.ratio) return ratio * 100;
    if (!valid.test(props.ratio)) return ratio * 100;

    const [width, height] = props.ratio.split('/').map((num) => Number(num));

    return (height / width) * 100;
  }, [props.ratio]);

  return (
    <div
      className={Styles.AspectRatio}
      style={{
        paddingBottom: `${ratio}%`,
      }}
    >
      <div className={Styles.Container}>
        <div className={Styles.Content}>
          { props.children }
        </div>
      </div>
    </div>
  );
};
