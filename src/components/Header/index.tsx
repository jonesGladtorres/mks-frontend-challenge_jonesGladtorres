import { StyledSubTitleHeader, StyledTitleHeader } from "@/styles/typography/header"
import { ButtonHeader } from "./ButtonHeader"
import { StyledContainerHeader, StyledContainerTitleHeader } from "./style"

export const Header = () => {
    return (
        <StyledContainerHeader>
            <StyledContainerTitleHeader>
                <StyledTitleHeader>MKS</StyledTitleHeader>
                <StyledSubTitleHeader>Sistemas</StyledSubTitleHeader>
            </StyledContainerTitleHeader>
            <ButtonHeader />
        </StyledContainerHeader>
    )
}