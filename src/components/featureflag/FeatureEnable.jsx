import { FEATURE_FLAG } from '@/lib/featureFlags';
function FeatureFlag({ featureFlag, children }) {
  return FEATURE_FLAG[featureFlag] ? children : null;
}

export default FeatureFlag;