import PropTypes from 'prop-types';
import {CanvasBackground} from '../components/CanvasBackground';

export const FullWidthLayout = ({children}) => (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-gray-900 text-white font-sans">
        <CanvasBackground/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"/>
        <div className="relative z-10 flex flex-col justify-between h-full">
            {children}
        </div>
    </div>
);

FullWidthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};