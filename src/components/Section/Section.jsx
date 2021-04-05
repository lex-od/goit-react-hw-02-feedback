import PropTypes from 'prop-types';
import css from './Section.module.scss';

const Section = ({ title = '', children }) => (
    <section className={css.section}>
        {title && <h2 className={css.sectionTitle}>{title}</h2>}
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Section;
