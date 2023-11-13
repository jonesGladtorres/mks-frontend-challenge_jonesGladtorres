import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export const Loading = () => {
  return (
    <SkeletonTheme baseColor="#e6e6e6" highlightColor="#939292">
      <div>
        <Skeleton height={150} />
        <div>
          <Skeleton height={20} width={230} style={{ marginBottom: '8px' }} />
          <Skeleton height={15} width={230} style={{ marginBottom: '8px' }} />
          <Skeleton height={80} style={{ marginBottom: '2px' }} />
        </div>
      </div>
    </SkeletonTheme>
  );
};