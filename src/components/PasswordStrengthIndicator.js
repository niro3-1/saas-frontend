// Password strength indicator code
import zxcvbn from 'zxcvbn';

function PasswordStrengthIndicator({ password }) {
    const strength = zxcvbn(password);
    return (
        <div>
            <progress value={strength.score} max="4" />
            <span>{strength.feedback.suggestions.join(', ')}</span>
        </div>
    );
}

export default PasswordStrengthIndicator;