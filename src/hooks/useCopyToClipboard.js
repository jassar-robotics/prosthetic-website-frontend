import { toast } from 'react-toastify';

export function useCopyToClipboard() {
  const copy = async (fullUrl) => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      // toast.success('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.error('Failed to copy link.');
    }
  };

  return { copy };
}
