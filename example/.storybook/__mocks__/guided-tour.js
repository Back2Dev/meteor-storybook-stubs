import { action } from '@storybook/addon-actions'

export default () => <div>Guided tour</div>

export const useTour = () => ({
  isOpen: false,
  setDisabledActions: () => {},
  setCurrentStep: action('setCurrentStep'),
})

export const TourProvider = ({ children }) => <div>{children}</div>
