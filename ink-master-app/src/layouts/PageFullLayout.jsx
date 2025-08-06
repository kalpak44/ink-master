import PropTypes from 'prop-types';

/**
 * Layout with full width, navbar, and profile dropdown.
 * Wrap your page content in this component.
 *
 * Props:
 * - children: ReactNode
 */
export const FullWidthLayout = ({children}) => {


    return (
        <div className="flex flex-col h-screen w-full overflow-hidden bg-gray-900 text-white">
            {children}
        </div>
    );
};

FullWidthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};