<?php

namespace Charlielangridge\TicketGenerator;

use Laravel\Nova\ResourceTool;

class TicketGenerator extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Ticket Generator';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'ticket-generator';
    }
}
