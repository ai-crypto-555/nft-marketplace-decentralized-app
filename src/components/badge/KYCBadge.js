// material
import { useTheme } from '@mui/material/styles';
import { Stack, Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function KYCBadge(props) {
  const { size='normal', sx } = props
  const src = `/static/badges/kyc.svg`
  const containerSx = size==='large' ? { height: '100%', maxHeight: '2rem', maxWidth: '2rem' } : {}
  const imgSx = size==='large' ? { height: '100%' } : { width: 20, height: 20 }
  return (
    <Stack
      direction='row'
      sx={{
        height: 26,
        backgroundColor: 'transparent',
        borderRadius: '100%',
        alignItems: 'center',
        ...containerSx,
        ...sx
      }}
    >
      <svg width="100" height="100" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={imgSx}>
        <path d="M21.001 11C21.001 9.42 20.126 8.05 18.853 7.4C19.007 6.965 19.091 6.495 19.091 6C19.091 3.79 17.381 2.002 15.273 2.002C14.803 2.002 14.353 2.086 13.937 2.252C13.319 0.915 12.011 0 10.501 0C8.991 0 7.685 0.917 7.064 2.25C6.649 2.085 6.198 2 5.728 2C3.618 2 1.91 3.79 1.91 6C1.91 6.494 1.993 6.964 2.147 7.4C0.875 8.05 0 9.418 0 11C0 12.495 0.782 13.798 1.942 14.486C1.922 14.656 1.91 14.826 1.91 15C1.91 17.21 3.618 19 5.728 19C6.198 19 6.648 18.914 7.063 18.75C7.683 20.084 8.989 21 10.5 21C12.012 21 13.318 20.084 13.937 18.75C14.352 18.913 14.802 18.998 15.273 18.998C17.383 18.998 19.091 17.208 19.091 14.998C19.091 14.824 19.079 14.654 19.058 14.485C20.216 13.798 21.001 12.495 21.001 11.001V11Z" fill="currentColor"/>
        <path d="M10.5613 7C10.2363 7 9.9707 7.2636 9.9707 7.59062V13.8457C9.9707 14.1707 10.2343 14.4363 10.5613 14.4363C10.8864 14.4363 11.152 14.1727 11.152 13.8457V7.59062C11.152 7.2636 10.8883 7 10.5613 7Z" fill="#4AB4F0"/>
        <path d="M13.1159 10.7182L15.8253 8.00684C16.0552 7.77693 16.0552 7.40234 15.8253 7.17243C15.5954 6.94252 15.2208 6.94252 14.9909 7.17243L11.8633 10.3C11.6334 10.5299 11.6334 10.9045 11.8633 11.1344L14.9909 14.2619C15.1058 14.3769 15.2564 14.4343 15.4091 14.4343C15.5617 14.4343 15.7103 14.3769 15.8273 14.2619C16.0572 14.032 16.0572 13.6574 15.8273 13.4275L13.1159 10.7182Z" fill="#4AB4F0"/>
        <path d="M5.59062 7C5.2636 7 5 7.2636 5 7.59062C5 7.91765 5.2636 8.18125 5.59062 8.18125C6.98989 8.18125 8.12951 9.31889 8.12951 10.7182C8.12951 12.1174 6.98989 13.257 5.59062 13.257C5.2636 13.2551 5 13.5187 5 13.8457C5 14.1727 5.2636 14.4363 5.59062 14.4363C7.64196 14.4363 9.30879 12.7675 9.30879 10.7182C9.30879 8.66683 7.63997 7 5.59062 7Z" fill="#4AB4F0"/>
      </svg>
    </Stack>
  );
}
