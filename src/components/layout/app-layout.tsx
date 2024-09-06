'use client';

import * as React from 'react';
import { useLayoutContext } from '@/context/layout-context';
import LayoutMobile from './mobile/layout-mobile';
import LayoutWeb from './web/layout-web';

export default function AppLayout({ children}: { children: React.ReactNode }) {
  const { device } = useLayoutContext();

  const isMobile = React.useMemo(() => {
    return device === 'MOBILE';
  }, [device]);

  return (
    <>
      { isMobile ?
        <LayoutMobile>
          { children }
        </LayoutMobile>  :
        <LayoutWeb>
          { children }
        </LayoutWeb>
      }
    </>
  );
}
