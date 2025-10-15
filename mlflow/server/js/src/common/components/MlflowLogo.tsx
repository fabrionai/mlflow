import React from 'react';
import { useDesignSystemTheme } from '@databricks/design-system';

export const MlflowLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { theme } = useDesignSystemTheme();
  
  // Use black-red logo for light theme, white-red for dark theme
  const logoSrc = theme.isDarkMode 
    ? '/static-files/fabrion-logo-white-red.png'
    : '/static-files/fabrion-logo-black-red.png';

  return (
    <img
      src={logoSrc}
      alt="Fabrion Mlflow"
      title="Fabrion Mlflow"
      width="120"
      height="40"
      style={{
        width: 'auto',
        margin: '10px'
      }}
      {...props}
    />
  );
};
