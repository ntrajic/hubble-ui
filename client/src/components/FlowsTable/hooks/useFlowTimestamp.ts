import { useEffect, useState } from 'react';
import { Flow } from '~/domain/flows';
import { FlowsStream } from '~/api/grpc/flows';

export function useFlowTimestamp(milliseconds?: number | null) {
  const [timestamp, setTimestamp] = useState(
    Flow.formatRelativeTimestamp(new Date(milliseconds ?? Date.now())),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(
        Flow.formatRelativeTimestamp(new Date(milliseconds ?? Date.now())),
      );
    }, FlowsStream.THROTTLE_DELAY_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return timestamp;
}