import { VariantType, enqueueSnackbar } from 'notistack';
export const toast = (message: string, variant: VariantType) => {
  enqueueSnackbar(message, {
    variant,
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
  });
};
